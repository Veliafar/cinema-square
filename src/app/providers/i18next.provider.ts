import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { I18NEXT_SERVICE, I18NextModule, I18NextTitle, ITranslationService } from 'angular-i18next';
import { environment } from './../../environments/environment.production';
import * as i18nextLanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import * as moment from 'moment';

const i18nextOptions = {
    whitelist: ['en', 'es'],
    fallbackLng: 'en',
    debug: !environment.production,
    returnEmptyString: false,
    initImmediate: false,
    ns: [
        'enums',
        'search'
    ],
    interpolation: {
        format: I18NextModule.interpolationFormat((value, format, lng) => {
            if (!value) {
                return;
            }
            if (format === 'uppercase') {
                return value.toUpperCase();
            }
            if (format === 'duration_seconds') {
                const durationSec = moment.duration(value, 'seconds');
                return moment.utc(durationSec.as('milliseconds')).format('m:ss');
            }
            if (format === 'currency') {
                return value.toLocaleString();
            }
            if (value instanceof Date) {
                return moment(value).format(format);
            }
            return value;
        })
    },
    // backend plugin options
    backend: {
        loadPath: function (langs, ns) {
            let buildNumber = environment.buildNumber;
            if (!buildNumber || buildNumber === '0' || buildNumber === '{{buildNumber}}') {
                buildNumber = (new Date()).getTime().toString();
            }
            const cacheBurst = '?cacheBurst=' + buildNumber;
            //  + cacheBurst
            return 'locales/{{lng}}/{{ns}}.json';
        }
    },
    // lang detection plugin options
    detection: {
        // order and from where user language should be detected
        order: ['cookie'],

        // keys or params to lookup language from
        lookupCookie: 'lang',

        // cache user language on
        caches: ['cookie'],

        // optional expire and domain for set cookie
        cookieMinutes: 10080, // 7 days
        // cookieDomain: I18NEXT_LANG_COOKIE_DOMAIN
    }
};

export function appInit(i18next: ITranslationService) {
    registerLocaleData(localeEn);
    registerLocaleData(localeEs);
    return () => i18next
        .use(XHR)
        .use(i18nextLanguageDetector)
        .init(i18nextOptions);
}

export function localeIdFactory(i18next: ITranslationService) {
    return i18next.language;
}

export const I18N_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInit,
        deps: [I18NEXT_SERVICE],
        multi: true
    },
    {
        provide: LOCALE_ID,
        deps: [I18NEXT_SERVICE],
        useFactory: localeIdFactory
    },
    {
        provide: Title,
        useClass: I18NextTitle
    }
];

export const environment = {
    production: true,
    mock: false,
    appName: '{{appTitle}}',
    apiEndpoint: '{{url}}',
    apiPath: '/{{appName}}/{{apiUrl}}',
    reportService: '{{reportServerUrl}}',
    webStoragePrefix: 'prod',
    webStorageToken: 'token',
    identityServerUrl: '/{{appName}}/{{identityUrl}}',
    whitelistedDomains: [
        '{{whitelistDomain}}'
    ],
    buildNumber: '{{buildNumber}}'
};

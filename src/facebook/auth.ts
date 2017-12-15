import { facebookAppId, facebookAppSecret } from '../../keys'

declare const OAuth2

export const getOAuthService = () => OAuth2.createService('facebookService')
                                    .setAuthorizationBaseUrl('https://www.facebook.com/v2.11/dialog/oauth')
                                    .setTokenUrl('https://graph.facebook.com/v2.9/oauth/access_token')
                                    .setClientId(facebookAppId)
                                    .setClientSecret(facebookAppSecret)
                                    .setPropertyStore(PropertiesService.getUserProperties())
                                    .setCallbackFunction('authCallback')

export const authCallback = request => {
    const authorized = getOAuthService().handleCallback(request)
    const message = authorized ? 'Success! You can close this tab.' : 'Denied. You can close this tab'
    return HtmlService.createHtmlOutput(message)
}

export const isAuthValid = () => {
    const service = getOAuthService();
    return service == null ? false : service.hasAccess()
}

export const get3PAuthorizationUrls = () => getOAuthService() == null ? '' : getOAuthService().getAuthorizationUrl()

export const resetAuth = () => {
    const service = getOAuthService()
    service.reset()
}

export function logRedirectUri() {
    var service = getOAuthService();
    Logger.log(service.getRedirectUri());
}
//API _NOTIFICATION_MESSAGES

export const API_MOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loding...',
        message: 'Data is being loaded, pLease wait'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    },  
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again.'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'unable to connect with the server. Plese check internet connectivity and try again later'
    }
}

//API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url:'/', method:'POST.GET.DELETE' param:true/false, query: true/false}
export const SERVICE_URLS = {
    userSignup: {
        url: '/signup', 
        method: 'POST'
    }
}

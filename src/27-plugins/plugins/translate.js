export default {
    install(app, options) {
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((obj, i) => {
                if(obj) return obj[i];
            }, options)
        }

        app.provide('translations', options)
    }
}
import en from '../i18n/en.json'
import ua from '../i18n/ua.json'

import { createI18n } from 'vue-i18n'

const createi18n = () => {
    const i18n = createI18n({
		locale: 'en',
        legacy: false,
        messages: {
            'en': en,
            'ua': ua
        }
    })
    return i18n
}

export default createi18n
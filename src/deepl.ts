import https from "./https-common";

class deepl {
    translate(original_text:string, auth_key:string, target_lang:string) {
    const params = new FormData();
    params.append('auth_key', auth_key);
    params.append('text', original_text);
    params.append('target_lang', target_lang);

        return https.post('translate?auth_key=' + auth_key, params)
    }
}

export default new deepl();

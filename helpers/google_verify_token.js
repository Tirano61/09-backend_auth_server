const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '1089586490749-37j6uft10pma5r35saoe6ja556t83aom.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);


const validarGoogleIdToken = async (token) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '1089586490749-v1kft25bl0t6m7dlvahhrehsd5c5jfcg.apps.googleusercontent.com'
            ],  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
        console.log(payload);
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email']
        }


    } catch (error) {
        return null;
    }



}


module.exports = {
    validarGoogleIdToken
}
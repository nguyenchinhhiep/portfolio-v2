
export class FirebaseUserModel {
    constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {
        this.email = email;
        this.id = id,
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate
    }

    get token() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
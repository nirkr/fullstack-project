import mongoose from 'mongoose';
import {toHash} from '../services/password';

interface UserAttrs {
    userName: string,
    password: string;
};

interface UserDoc extends mongoose.Document {
    userName: string,
    password: string,
};

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
};

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

userSchema.pre('save', async function(){
    if (this.isModified('password')){
        const hashedPassword = toHash(this.password);
        this.set({password: hashedPassword});
    }
})

const User = mongoose.model<UserDoc,UserModel>('User', userSchema);

export { User };


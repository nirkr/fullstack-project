import mongoose from 'mongoose';

interface MissionValue {
    a: {
        b: {
            c: string
        }
    }
}

interface MissionAttrs {
    key: string,
    value: MissionValue;
};

interface MissionDoc extends mongoose.Document {
    key: string,
    value: MissionValue;
};

interface MissionModel extends mongoose.Model<MissionDoc> {
    build(attrs: MissionAttrs): MissionDoc;
};

const MissionSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: Object,
        required: true,
    }
});

MissionSchema.statics.build = (attrs: MissionAttrs) => {
    return new Mission(attrs);
}

const Mission = mongoose.model<MissionDoc,MissionModel>('Mission', MissionSchema);

export { Mission };


import { FC } from 'react';
import { message, Upload as AntUpload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = AntUpload;

interface Props {
    setHar: any;
}

const Upload: FC<Props> = ({ setHar }) => {
    const handleUpload = async (file: File) => {
        const extension = file.name.split('.').pop();

        if (extension?.toLowerCase() !== 'har') {
            message.error('Only .har files are supported');
            return false;
        }

        const contents = await file.text();
        setHar(JSON.parse(contents).log);
        return false;
    };

    return (
        <Dragger accept=".har" name="file" beforeUpload={handleUpload}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
            </p>
        </Dragger>
    );
};

export default Upload;

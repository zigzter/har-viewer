import React, { useState } from 'react';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Request from '../Request';

const { Dragger } = Upload;

const Home = () => {
    const [file, setFile] = useState<string | null>(null);
    const handleUpload = async (file: File) => {
        console.log(file.name.split('.'))
        const extension = file.name.split('.').pop();
        if (extension?.toLowerCase() !== 'har') {
            message.error('Only .har files are supported');
            return false;
        }

        const contents = await file.text();
        console.log(contents);
        setFile(contents);
        return false;
    };

    if (file) {
        return <Request />
    }

    return (
        <div>
            <Dragger accept=".har" name="file" beforeUpload={handleUpload}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </Dragger>
        </div>
    );
};

export default Home;

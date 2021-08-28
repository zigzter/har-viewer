import { useState } from 'react';
import { Layout, Tabs, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Upload from './Upload';
import { Har, Tab } from './types';

const { Content, Header, Footer } = Layout;
const { TabPane } = Tabs;

function App() {
    const [har, setHar] = useState<Har | null>(null);
    const [tabs, setTabs] = useState<Tab[]>([]);
    console.log(har);

    return (
        <Layout>
            <Header></Header>
            <Content style={{ padding: '0 50px' }}>
                <Button danger type="primary" icon={<DeleteOutlined />} onClick={() => setHar(null)} />
                <Tabs type="editable-card" hideAdd>
                    <TabPane tab={har ? 'HAR' : 'Upload'} key="home-tab" closable={false}>
                        {har ? (
                            <List
                                itemLayout="vertical"
                                size="large"
                                dataSource={har.entries}
                                renderItem={(item) => <List.Item>{item.request.method} {item.request.url}</List.Item>}
                            />
                        ) : (
                            <Upload setHar={setHar} />
                        )}
                    </TabPane>
                    {tabs.map(({ content, title }, index) => {
                        return (
                            <TabPane tab={title} key={index} closable>
                                <div>{content}</div>
                            </TabPane>
                        );
                    })}
                </Tabs>
            </Content>
            <Footer></Footer>
        </Layout>
    );
}

export default App;

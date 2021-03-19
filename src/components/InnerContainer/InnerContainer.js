import { Button, Card, Col, Row, Space } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';

export default function InnerContainer() {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: '100%',
                backgroundColor: '#ccc',
            }}
        >
            <Row style={{ width: '100%', height: '35px', borderBottom: '1px solid white', marginBottom: '20px', paddingBottom: '50px' }}>
                <Space size={'small'}>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 1
                </Button>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 2
                </Button>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 3
                </Button>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 4
                </Button>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 5
                </Button>
                <Button type="secondary" shape="round" size={'default'}>
                    Tag 6
                </Button>

                </Space>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" height="140px" src="https://wallpapercave.com/wp/wp5952062.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>

        </Content>
    )
}

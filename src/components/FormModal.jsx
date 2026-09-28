'use client';

import { Form, Input, InputNumber, Modal } from "antd";

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
            title={serie ? 'Editar Série' : 'Cria nova Série'}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden>
            <Form form={form} layout="vertical" initialValues={serie} onFinish={onSubmit}>
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Título é obrigatório e deve ter entre 3 e 120 caracteres!'
                        },
                    ]}>
                    <Input placeholder='ex: Breaking Bad' />
                </Form.Item>

                <Form.Item
                    name="genero"
                    label="Gênero"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Gênero é obrigatório!'
                        },
                    ]}>
                    <Input placeholder='ex: Drama' />
                </Form.Item>

                <Form.Item
                    name="plataforma"
                    label="Plataforma"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Plataforma é obrigatória!'
                        },
                    ]}>
                    <Input placeholder='ex: Netflix' />
                </Form.Item>

                <Form.Item
                    name="numero_temporadas"
                    label="Número de Temporadas"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            min: 1,
                            message: 'Número de Temporadas é obrigatório e deve ser um número positivo!'
                        },
                    ]}>
                    <InputNumber placeholder='ex: 5'
                     min={1}
                      style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="ano_lancamento"
                    label="Ano de Lançamento"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            min: 1,
                            message: 'Ano de Lançamento é obrigatório e deve ser um número positivo!'
                        },
                    ]}>
                    <InputNumber 
                    placeholder='ex: 2020' 
                    min={1} 
                    style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="imageUrl"
                    label="URL da Imagem"
                    rules={[
                        {
                            type: 'url',
                            message: 'Deve ser uma URL válida!'
                        },
                    ]}>
                    <Input 
                    placeholder='ex: https://codeverse.dev.br/images/breaking-bad.png' 
                    min={1} 
                    style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

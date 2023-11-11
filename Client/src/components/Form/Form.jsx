import React from "react";
import style from "./Form.module.css";
import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} es requerido!',
  types: {
    email: 'Este no es un email válido!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */



const FormContact = () => {
  const [form] =Form.useForm();

  const onFinish = async (values) => {
    console.log('values');
    try {
      const response = await axios.post('/enviar-correo', values);
      console.log(response.data.message);
      toast.success('Correo enviado con éxito', {
        position: 'top-right',
        autoClose: 3000,
      });
      form.resetFields();
    } catch (error) {
      console.error(error);
      toast.error('Error al enviar el correo', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className={style.box}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 630,
          padding: 25,
          left: -100,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Asunto">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Consulta">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormContact;
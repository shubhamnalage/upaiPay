import { Button, Form, Input } from "antd";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { upiPayment } from "../common/api-serivces";
const DepositePopup = () => {
  const user = useContext(UserContext);
  const [form] = Form.useForm();
  const [amount, setAmount] = useState();
  const [htmlContent, setHtmlContent] = useState("");
  const [formLayout, setFormLayout] = useState("vertical");

  const navigate = useNavigate();

  const onFinish = (values) => {
    const payload = {
      amount: amount,
      secret_key: "wqtuyd726",
      payment_type: 1,
      uid: "123",
    };
    console.log("payload", payload);
    return upiPayment(payload).then(
      (res) => {
        if (res.data) {
          const data1 = res.data;
          setHtmlContent(res.data);
          navigate("/upiGateway", { state: { htmlContent: data1 } });
          // window.location.replace(res.data.redirectUrl);
          user.setIsModalOpen(false);
          //   setLoading(true);
        } else {
          console.log("payment unsuccessful");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  };
  // const onFinish = (values) => {
  //   const payload = {
  //     amount: amount,
  //     secret_key: "wqtuyd726",
  //     payment_type: 1,
  //     uid: "123",
  //   };
  //   console.log("payload", payload);
  //   return upiPayment(payload).then(
  //     (res) => {
  //       if (res.data) {
  //         const data1 = res.data;
  //         console.log("data1", data1);
  //         // setHtmlContent(res.data);
  //         console.log("payment successful");
  //         // const newWindow = window.location.href(
  //         //   "https://upipay.co.in/api/payment-gateway",
  //         //   "_self"
  //         // );
  //         // newWindow.document.write(data1);
  //         const domain = "https://upipay.co.in";
  //         const path = "/api/scan-and-pay";
  //         const url = domain + path;
  //         navigate(url);
  //         // user.setIsModalOpen(false);
  //         //   setLoading(true);
  //       } else {
  //         console.log("payment unsuccessful");
  //       }
  //     },
  //     (err) => {
  //       console.log("err", err);
  //     }
  //   );
  // };

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "vertical"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 24,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "vertical"
      ? {
          wrapperCol: {
            span: 14,
            // offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Amount" onChange={(e) => setAmount(e.target.value)}>
          <Input type="number" placeholder="100" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default DepositePopup;

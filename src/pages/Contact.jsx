import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Alert from '../components/Alert';

const Title = styled.p`
  display: inline-flex;
  position: relative;
  font-size: 50px;

  &::after {
    display: block;
    content: '';
    height: 2px;
    width: ${({ loaded }) => (loaded === 'true' ? '100%' : '0')};
    transition: width 0.5s ease;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Text = styled.p`
  padding-top: 5px;
  padding-left: 5px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin-top: 30px;

  & > div {
    margin-top: 10px;
  }
`;

const Name = styled.span`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 49%;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  text-transform: uppercase;
  margin-top: 45px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  background-color: ${({ success }) => {
    if (success === '') return 'none';
    if (success) return '#dfe6da';
    return '#e3cbbf';
  }};

  color: ${({ success }) => {
    if (success === '') return 'none';
    if (success) return '#758467';
    return '#8b2729';
  }};
`;

const style = {
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
};

function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q4q65v4',
        'template_x8hkpxj',
        form.current,
        'H7KHfTD6ovniyTUXZ'
      )

      .then(() => {
        setSuccess(true);
        setFirst('');
        setLast('');
        setEmail('');
        setMessage('');
      })

      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };

  return (
    <Card>
      <Header />
      <Content>
        <Title loaded={loaded.toString()}>Get in touch</Title>
        <Text>
          Feel free to reach out about collaborations, inquiries, questions and
          more
        </Text>
        <form ref={form} onSubmit={sendEmail}>
          <Fields>
            <Name>
              <TextField
                label="FIRST NAME"
                variant="standard"
                name="user_first"
                sx={style}
                required
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              />
              <TextField
                label="LAST NAME"
                variant="standard"
                name="user_last"
                sx={style}
                required
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </Name>
            <TextField
              label="EMAIL"
              variant="standard"
              name="user_email"
              sx={style}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="MESSAGE"
              variant="standard"
              name="message"
              sx={style}
              multiline
              required
              minRows={5}
              maxRows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Fields>
          <Button type="submit" value="Send" success={success}>
            {success === '' ? "Let's talk" : success ? 'Success' : 'Error'}
          </Button>
        </form>

        <Alert title="hey" message="message"></Alert>
      </Content>
    </Card>
  );
}

export default Contact;

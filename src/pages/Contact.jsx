import React, { useState, useRef, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import Card from '../layout/Card';
import ResponsiveHeader from '../layout/ResponsiveHeader';
import Content from '../layout/Content';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Alert from '../components/Alert';
import { DarkModeContext } from '../hooks/Context';
import {
  mobile,
  tablet,
  desktop,
  tabletAndDesktop,
  emailDict,
} from '../helpers/variables';

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
    background-color: ${({ color }) => color};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${mobile} {
    font-size: 40px;
  }
`;

const Text = styled.p`
  padding-top: 5px;
  padding-left: 5px;

  /* ${mobile} {
    font-size: 12px;
  } */
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin-top: 30px;

  & > div {
    margin-top: 10px;
  }

  ${mobile} {
    margin-top: 20px;
    max-width: 100%;
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
    if (success === '') return 'red';
    if (success === 'true') return 'var(--success-bg)';
    return 'var(--error-bg)';
  }};

  color: ${({ success }) => {
    if (success === '') return 'none';
    if (success === 'true') return 'var(--success-font-color)';
    return 'var(--error-font-color)';
  }};
`;

function Contact() {
  const { color } = useContext(DarkModeContext);
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
        emailDict.serviceID,
        emailDict.templateID,
        form.current,
        emailDict.publicKey
      )

      .then(() => {
        setSuccess('true');
        setFirst('');
        setLast('');
        setEmail('');
        setMessage('');
      })

      .catch((error) => {
        console.log(error);
        setSuccess('false');
      });
  };

  const style = {
    '& label.Mui-focused': {
      color: `${color}`,
    },
    '& label': {
      color: `${color}`,
    },
    '& input': {
      color: `${color}`,
    },
    '& .MuiInputBase-inputMultiline': {
      color: `${color}`,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: `${color}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${color}`,
    },
  };

  return (
    <Card>
      <ResponsiveHeader />
      <Content>
        <Title loaded={loaded.toString()} color={color}>
          Get in touch
        </Title>
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
      </Content>
    </Card>
  );
}

export default Contact;

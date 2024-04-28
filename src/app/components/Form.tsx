import { useState } from 'react';
import { useForm } from '@mantine/form';
import {TextInput, Center, Box, Stepper, Button, Group, Text } from '@mantine/core';
import classes from '../styles/Form.module.css';
import { randomId } from '@mantine/hooks';

export default function Form() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <>
    <Center bg="white" className={classes.FormContainer}>
      <Box className={classes.form} >
      <Text component="span" className={classes.highlight} pb="2" >
           Login
          </Text>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
      </Stepper>
      <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      {/* <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
      </Group> */}
    </div>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
      </Box>
    </Center>
      
    </>
  );
}
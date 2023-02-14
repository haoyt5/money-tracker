import { FunctionComponent, useEffect } from 'react'
import {
    useForm,
    SubmitHandler,
    Controller,
    ValidationValue,
} from 'react-hook-form'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import SubmitButton from './SubmitButton'
type Inputs = {
    amount: number
    category: string
}
interface ExpenseFormProps {}

const ExpenseForm: FunctionComponent<ExpenseFormProps> = () => {
    const {
        control,
        // register,
        handleSubmit,
        // watch,
        reset,
        formState,
        formState: { isValid, errors },
    } = useForm<Inputs>()
    const handleSubmitExpense = async (data: Inputs) => {
        const response = await fetch('http://localhost:8080/expenses', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data),
        })
        console.log(response)
        return
    }
    const onSubmit: SubmitHandler<Inputs> = (data) => handleSubmitExpense(data)

    // console.log(watch('amount')) // watch input value by passing the name of it
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ amount: 0.0, category: 'Select One' })
        }
    }, [formState, reset])
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Form onSubmit={handleSubmit(onSubmit)} className="font-medium">
            {/* register your input into the hook by invoking the "register" function */}
            {/* <input defaultValue="test" {...register('example')} /> */}
            <FormGroup>
                <Row>
                    <Col xs="4" className="d-flex align-items-center">
                        <Label for="amount" className="m-0 ">
                            <span className="text-lg">Amount:</span>
                        </Label>
                    </Col>
                    <Col xs="8">
                        <Controller
                            rules={{ required: true, min: 0.01 }}
                            render={({ field }) => (
                                <Input
                                    id="amount"
                                    placeholder="$0.0"
                                    className="text-end"
                                    type="number"
                                    step={0.01}
                                    invalid={errors.amount ? true : false}
                                    {...field}
                                />
                            )}
                            name="amount"
                            control={control}
                            defaultValue={0.0}
                        />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col xs="4" className="d-flex align-items-center">
                        <Label for="category" className="m-0">
                            <span className="text-lg ">Category:</span>
                        </Label>
                    </Col>
                    <Col xs="8">
                        <Controller
                            rules={{
                                required: true,
                                validate: (value: ValidationValue) =>
                                    value !== 'Select One',
                            }}
                            render={({ field }) => (
                                <Input
                                    id="category"
                                    placeholder="Select One"
                                    type="select"
                                    invalid={errors.category ? true : false}
                                    {...field}
                                >
                                    <option>Select One</option>
                                    <option value="bills">Bills</option>
                                    <option value="grocery">Grocery</option>
                                    <option value="health">Health</option>
                                    <option value="travel">Travel</option>
                                    <option value="others">Others</option>
                                </Input>
                            )}
                            name="category"
                            control={control}
                            defaultValue={undefined}
                        />
                    </Col>
                </Row>
            </FormGroup>
            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register('exampleRequired', { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {(errors.amount || errors.category) && (
                <span>amount field is required</span>
            )} */}
            <Row className="pt-2 pb-4">
                <Col xs="4">
                    <SubmitButton disabled={!isValid} className="w-100">
                        Confirm
                    </SubmitButton>
                </Col>
            </Row>
        </Form>
    )
}
export default ExpenseForm

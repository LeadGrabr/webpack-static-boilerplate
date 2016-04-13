import React, { Component, PropTypes } from 'react'
import { Base, Button } from 'rebass'
import { connect } from 'redux-await'
import { createLead, constants } from '../../redux/modules/app'
import autobind from 'autobind-decorator'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import Joi from 'joi'
import { default as joiFulFormSettings, phone } from '../JoifulReactForms'
const { SUBMIT_LEAD } = constants
import Spinner from 'react-spinkit'
import { Flex } from 'reflexbox'

@connect(() => ({}), { submit: createLead })

export default class ContactForm extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    state = {}

    @autobind
    handleSubmit(error) {
        if (error) {
            return false
        }

        return this.props.submit(this.state)
    }

    @autobind
    handleChange(event, formValues) {
        this.setState(formValues)
    }

    render() {
        const { statuses, ...props } = this.props
        const pending = statuses[SUBMIT_LEAD] === 'pending'
        return (
            <Base {...props}>
                <JoifulForm
                    {...joiFulFormSettings}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    schema={{
                        name: Joi.string().required().label('Name'),
                        email: Joi.string().email().required().label('Email'),
                        phone: phone.label('Phone')
                    }}
                    values={this.state}
                >
                    <JoifulInput name="name"/>
                    <JoifulInput name="email"/>
                    <JoifulInput name="phone"/>
                    <Button
                        color="default"
                        disabled={pending}
                        onClick={this.handleSubmit}
                        style={{ width: '100%' }}
                    >
                        <If condition={pending}>
                            <Flex justify="center">
                                Processing... <Spinner spinnerName="pulse"/>
                            </Flex>
                        <Else/>
                            Submit
                        </If>
                    </Button>
                </JoifulForm>
            </Base>
        )
    }

}

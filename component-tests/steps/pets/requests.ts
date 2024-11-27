import {When, Then, DataTable} from '@cucumber/cucumber'
import axios from 'axios'
import {DefaultApi, Pet} from "../../../generated/openapi/api";
import { expect } from 'chai'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

let response

When('I create a pet with the following attributes', async (table: DataTable) => {
    const sdk = new DefaultApi(null, '/', axiosInstance)

    const dto = {} as Pet
    table.hashes().forEach((hash) => {
        for (const key of Object.keys(hash)) {
            dto[key] = hash[key]
        }
    })

    response = await sdk.addPet(dto)
})

Then('the response status is {int}', (status: number) => {
    expect(response.status).to.eq(status)
})

Then('the response contains the following attributes', (table: DataTable) => {
    const hash = table.hashes()[0]

    Object.keys(hash).forEach((key) => {
        expect(response.data[key]).to.eq(hash[key])
    })
})

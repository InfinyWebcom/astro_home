import AxiosFunction from './axiosRequest'

const asyncValidate = async (values) => {
    console.log("Axios values", values.email)
    let user_id = values.user_id ? values.user_id : ''
    let errors = {}
    if (values.email) {
        let data = await AxiosFunction.axiosHelperFunc('post', 'user/validateEmail', { email: values.email, user_id, user_type: 'astrologer' })
        console.log("Axios", data)
        if (data.data.isExist) {
            errors.email = 'Email already taken.'
        }
    }
    if (values.mobile) {
        let data = await AxiosFunction.axiosHelperFunc('post', 'user/validateEmail', { mobile: values.mobile, user_id, user_type: 'astrologer' })
        console.log("Axios", data)
        if (data.data.isExist) {
            errors.mobile = 'This contact number already taken'
        }
    }
    if (values.referral_code) {
        let data = await AxiosFunction.axiosHelperFunc('post', 'referral/validateReferral', { referral_code: values.referral_code })
        console.log("Axios", data)
        if (!data.data.isExist) {
            errors.referral_code = 'Please enter correct referral code.'
        }
    }
    if (errors.mobile || errors.email || errors.referral_code) {
        throw errors
    }



};

export default asyncValidate;
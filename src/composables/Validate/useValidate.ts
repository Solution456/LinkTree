import { ref, Ref, ComputedRef, computed } from "vue"

import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

import type { Rules } from "async-validator"



export const useValidator = <T>(formData: Ref<T>, rules: ComputedRef<object>) => {

    const {errorFields, isFinished, pass}= useAsyncValidator(formData, rules as ComputedRef<Rules>, {
        validateOption: {suppressWarning:true}
    })

    const tries = ref(0)

    const isValid = () => {
        tries.value++

        return pass.value && isFinished.value
    }

    const errors = computed(() => (
        tries.value ? errorFields.value : undefined
    ))

    const error = (field: string) => {
        return errors.value?.[field]?.[0]?.message
    }


    return {
        error,
        errors,
        isValid,
    }
}
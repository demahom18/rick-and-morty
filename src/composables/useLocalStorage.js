import { ref } from 'vue'

function updateRecord(value) {
    const record = ref(localStorage.getItem('record'))
    const newRecord = ref(false)

    if (!record.value || value > record.value) {
        record.value = value
        localStorage.setItem('record', value)
        newRecord.value = true
    }

    return { record, newRecord }
}

export default function useLocalStorage() {
    return {
        updateRecord
    }
}
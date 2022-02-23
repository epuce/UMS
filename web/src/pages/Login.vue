<template>
    <user-form></user-form>
</template>

<script>
import UserForm from "./../components/UserForm";

export default {
    name: "page-login",
    components: {
        "user-form": UserForm,
    },
};
</script>
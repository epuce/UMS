<template>
    <div class="user-form__wrapper">
        <form class="user-form">
            <label>
                E-mail

                <input v-model="user.email" type="email">
            </label>

            <label>
                Password

                <input v-model="user.password" type="password">
            </label>

            <label v-if="isRegisterForm">
                Repeat password

                <input v-model="user.repeatPassword" type="password">
            </label>

            <div class="user-form__actions">
                <button type="button" class="btn btn-primary" @click="saveForm">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "user-form",
    data: function () {
        const isRegisterForm = this.formType === "register";
        const user = {
            email: "",
            password: "",
        };

        if (isRegisterForm) {
            user.repeatPassword = "";
        }

        return {
            user,
            isRegisterForm,
        };
    },
    props: {
        formType: {
            type: String,
            default: "login",
        },
    },
    methods: {
        saveForm: function () {
            if (this.isRegisterForm) {
                axios.post("/api/user/save", this.user);
            } else {
                axios.post("/api/user/login", this.user).then(() => {
                    // TODO add response check
                    // if ((response.status = "OK")) {
                        this.$router.push("/");
                    // }
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.user-form {
    &__actions {
        text-align: center;
    }

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label,
    input {
        display: block;
    }
}
</style>

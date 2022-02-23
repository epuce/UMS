<template>
    <div>
        <div class="langVar-form__wrapper">
            <form class="langVar-form">
                <label>
                    {{ $t("lang_var_name") }}

                    <input v-model="langVar.name" v-bind:disavled="langVar.id"/>
                </label>

                <label v-if="!langVar.id || (langVar.id && langVar.lv_translation)">
                    {{ $t("lang_var_lv_translation") }}

                    <textarea v-model="langVar.lv_translation"> </textarea>
                </label>

                <label v-if="!langVar.id || (langVar.id && langVar.ru_translation)">
                    {{ $t("lang_var_ru_translation") }}

                    <textarea v-model="langVar.ru_translation"> </textarea>
                </label>

                <label v-if="!langVar.id || (langVar.id && langVar.eng_translation)">
                    {{ $t("lang_var_eng_translation") }}

                    <textarea v-model="langVar.eng_translation"> </textarea>
                </label>

                <div class="langVar-form__actions">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="saveLangVar()"
                    >
                        {{ $t("save") }}
                    </button>
                </div>
            </form>
        </div>

        <table>
            <tr v-for="(langVar, index) in langVars" :key="index">
                <td>
                    {{ langVar.name }}
                </td>
                <td>
                    <div>
                        <strong>{{langVar.language | uppercase}}:</strong>

                        <span>{{ langVar.text }}</span>
                    </div>
                </td>
                <td>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="editLangVar(langVar.id)"
                    >
                        {{ $t("edit") }}
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteLangVar(langVar.id)"
                    >
                        {{ $t("delete") }}
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "page-lang-vars",
    data() {
        return {
            langVars: [],
            langVar: {
                name: "",
                id: null,
                lv_translation: "",
                ru_translation: "",
                eng_translation: "",
            },
        };
    },
    created() {
        this.loadLangVars();
    },
    methods: {
        loadLangVars() {
            this.$axios.get("/api/lang-var/list").then((response) => {
                console.log(response);
                this.langVars = response.data.content;
            });
        },
        saveLangVar() {
            this.$axios.post("/api/lang-var/save", this.langVar).then(() => {
                location.reload();
            });
        },
        editLangVar(id) {
            this.$axios.get(`/api/lang-var/get/${id}`).then((response) => {
                const data = response.data.content;

                this.langVar.id = data.id;
                this.langVar[`${data.language}_translation`] = data.text;
                this.langVar.name = data.name;
            });
        },
        deleteLangVar(id) {
            this.$axios.get(`/api/lang-var/delete/${id}`).then(() => {
                // location.reload();
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.langVar-form {
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

    textarea {
        display: block;
        resize: none;
    }
}
</style>
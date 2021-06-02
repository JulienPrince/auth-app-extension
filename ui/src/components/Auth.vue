<template>
  <q-page class="flex flex-center">
    <q-card square>
      <q-card-section>
        <div class="text-h6 text-center head">Vos identifiants d'accès</div>
      </q-card-section>

      <q-form class="q-gutter-md" @submit.prevent="onSubmit">
        <q-card-section>
          <q-input
            id="email"
            v-model.trim="email"
            type="email"
            label="Email"
            :rules="validations['email']"
            lazy-rules
            autofocus
            rounded
            outlined
            dense
            class="full-width q-mb-md"
          />
          <q-input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Mot de passe"
            :rules="validations['password']"
            lazy-rules
            rounded
            outlined
            dense
            class="full-width q-mb-md"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
        </q-card-section>
        <div class="forgottenPass">
          <q-btn
            @click="forgottenPassword = true"
            no-caps
            flat
            dense
            label="Mot de passe oublié ?"
          />
        </div>
        <q-card-actions>
          <q-btn
            rounded
            dense
            label="Connexion"
            color="primary"
            :loading="loading"
            type="submit"
            class="full-width"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import isEmail from "validator/es/lib/isEmail";

export default {
  name: "QAuth",

  props: {
    store: Object,
  },

  setup({ store }) {
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const showPassword = ref(false);
    const forgottenPassword = ref(false);

    const validations = {
      email: [
        (val) => !!val || "L'adresse email doit être fourni",
        (val) => isEmail || "Email non valide",
      ],
      password: [(val) => !!val || "Le mot de passe doit être fourni"],
    };

    const onSubmit = async () => {
      const data = {
        auth: { email: email.value, password: password.value },
      };

      // The parent application must contain a store with an auth/setToken and auth/clearToken mutation
      let response = "";
      try {
        loading.value = true;
        response = await axios.post("https://api.sowellapp.com/tokens", data);
        if (response.status == "201") {
          store.commit("auth/setToken", response.data.jwt);
        } else {
          store.commit("auth/clearToken");
        }
        loading.value = false;
      } catch (err) {
        store.commit("auth/clearToken");
        loading.value = false;
      }
    };

    return {
      email,
      password,
      loading,
      showPassword,
      validations,
      onSubmit,
      forgottenPassword,
    };
  },
};
</script>

<style scoped>
.head,
.q-page {
  font-family: "Arima";
  opacity: 0.7;
  font-size: 20px;
}

.q-card {
  width: 400px;
  padding: 50px;
}

.forgottenPass {
  margin-top: 0 !important;
  margin-left: 25px !important;
  cursor: pointer;
  color: #40c4ff;
}
</style>

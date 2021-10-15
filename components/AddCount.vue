

<template>
    <transition name="modal-fade">
        <div class="modal-overlay">
            <div class="add_content modal">
                <div class="add_title">
                    <input
                        type="text"
                        placeholder="Nombre contador"
                        id="name_new"
                        class="name_new"
                        autofocus
                        v-model="obj.name"
                        @focus="clean_name"
                        maxlength="20"
                    />
                </div>
                <div class="add_count">
                    <div class="count">
                        <div style="padding-right: 5%">
                            <h2 class="name">Valor</h2>
                        </div>
                        <div style="align-self: center">
                            <input
                                type="number"
                                class="input_counter"
                                min="1"
                                max="20"
                                v-model="obj.value"
                                @keypress="solo_numeros"
                            />
                        </div>
                    </div>
                </div>
                <div class="add_action">
                    <div class="cancelar">
                        <button class="btn_cancelar" @click="changeModalState">
                            cancelar
                        </button>
                    </div>
                    <div class="add_new">
                        <button @click="addCount">agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            obj: {
                name: "",
                value: 0,
            },
        };
    },
    methods: {
        changeModalState() {
            console.log(this.$store);
            this.$store.commit("toggleModal");
        },
        addCount() {
            if (this.obj.name != "") {
                var items = JSON.parse(localStorage.getItem("list"));
                if (items) {
                    const found = items.find(
                        (element) => element.name === this.obj.name
                    );
                    if (!found) {
                        this.$store
                            .dispatch("counter/saveCount", this.obj)
                            .then((res) => {
                                this.obj.value = 0;
                                this.obj.name = "";
                                this.changeModalState();
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        this.error_input();
                    }
                } else {
                    this.$store
                        .dispatch("counter/saveCount", this.obj)
                        .then((res) => {
                            this.obj.value = 0;
                            this.obj.name = "";
                            this.changeModalState();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            } else {
                this.error_input();
            }
        },
        clean_name() {
            var element = document.getElementById("name_new");
            element.classList.remove("input_error");
        },
        error_input() {
            var element = document.getElementById("name_new");
            element.classList.add("input_error");
        },
        solo_numeros(e) {
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();
            var letras = "1234567890";
            var especiales = "8-16-20-80-186";
            var valor = especiales.split("-");
            var tecla_especial = false;

            for (var j in valor) {
                if (key == valor[j]) {
                    tecla_especial = true;
                    break;
                }
            }

            var charStr = String.fromCharCode(key);

            if (letras.indexOf(charStr) == -1 && !tecla_especial) {
                e.preventDefault();
                e.stopPropagation();
            }
        },
    },
};
</script>
<style>
.input_error {
    outline: none !important;
    border: 2px solid red;
}
.add_content {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}
.input_counter {
    width: 40px;
    text-align: center;
}
.add_title {
    flex-grow: 1;
    text-align: start !important;
    padding-left: 5%;
    align-self: center;
}
.add_count {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.name_new {
    width: 500px;
}
.count {
    display: flex;
    flex-direction: row;
}
.add_action {
    display: flex;
    flex-grow: 1;
    align-self: center;
    text-align: center;
}
.btn_cancelar {
    background: #6c6c6c;
}
.btn_cancelar:hover {
    background: #8d8d8d;
}
.cancelar {
    flex-grow: 1;
    align-self: center;
}
.add_new {
    flex-grow: 1;
    align-self: center;
}
.modal-overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    height: 55px;
    width: 80%;
    margin-top: 20%;
}
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>
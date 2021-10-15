<template>
    <div class="header">
        <div class="order_filter">
            <button class="btn_filter_type" @click="filter_type">{{ icon_filter_type }}</button>
            <input
                type="number"
                class="input_count"
                v-model="number_filter"
                min="1"
                max="20"
                style="width: 30px; border-radius:4px;"
                @keypress="solo_numeros"
            />
            <button @click="filter_ok">
                filtrar {{ icon_filter_active }}
            </button>
            <button v-if="filter" class="btn_cancelar" @click="clean_filters">
                limpiar ✖
            </button>
        </div>
        <div class="filters_area">
            <div class="label_order">Ordenar por:</div>
            <div class="order_name">
                <button @click="order_name">
                    Nombre {{ icon_order_name }}
                </button>
            </div>
            <div class="order_value">
                <button @click="order_value">
                    Valor {{ icon_order_value }}
                </button>
            </div>
        </div>
        <div class="add_area">
            <button @click="changeModalState" :disabled="add_disable">
                Nuevo contador ✚
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            filter: false,
            filter_higher:true,
            icon_filter_active: '',
            name_asc: true,
            value_asc: false,
            number_filter: 0,
            icon_order_name: "",
            arraw_up: "↑",
            arraw_down: "↓",
            filter_icon: "▼",
            icon_order_value: "",
            filters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            buscador: "",
            add_disable: false,
            icon_filter_type:'≥'
        };
    },
    computed: {
        numberCounters() {
            return this.$store.state.counter.number_counters;
        },
        list() {
            return this.$store.state.counter.list;
        },
    },
    methods: {
        changeModalState() {
            console.log(this.$store);
            this.$store.commit("toggleModal");
        },
        order_name() {
            if (this.name_asc) {
                this.$store.commit("counter/orderNameDesc");
                this.name_asc = false;
                this.value_asc = false;
                this.icon_order_name = this.arraw_down;
                this.icon_order_value = "";
            } else {
                this.$store.commit("counter/orderNameAsc");
                this.name_asc = true;
                this.value_asc = false;
                this.icon_order_name = this.arraw_up;
                this.icon_order_value = "";
            }
        },
        filter_ok(){
            if (this.filter_higher) {
                this.$store.commit("filter/filterHigher", this.number_filter);
            }
            else{
                this.$store.commit("filter/filterSmaller",this.number_filter);
            }
            this.icon_filter_active = this.filter_icon
            this.filter = true
        },
        start() {
            this.$store.commit("counter/orderNameAsc");
            this.icon_order_name = this.arraw_down;
        },
        order_value() {
            if (this.value_asc) {
                this.$store.commit("counter/orderValueDesc");
                this.name_asc = false;
                this.value_asc = false;
                this.icon_order_name = "";
                this.icon_order_value = this.arraw_down;
            } else {
                this.$store.commit("counter/orderValueAsc");
                this.value_asc = true;
                this.name_asc = false;
                this.icon_order_name = "";
                this.icon_order_value = this.arraw_up;
            }
        },
        filter_type(){
            if (this.filter_higher) {
                this.icon_filter_type = '≤'
                this.filter_higher = false
            }
            else{
                this.icon_filter_type = '≥'
                this.filter_higher = true
            }
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
        clean_filters() {
            this.$store.commit("filter/cleanFilters");
            this.icon_filter_active = ''
            this.filter = false
        },
    },
    created() {
        this.start();
    },
    watch: {
        numberCounters: function () {
            if (this.numberCounters >= 20) {
                this.add_disable = true;
            } else {
                this.add_disable = false;
            }
        },
    },
};
</script>
<style>
.label_order {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
}
.header {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #45289f;
}

.filters_area {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.add_area {
    flex-grow: 1;
    text-align: right;
    padding-right: 8%;
}
.buscador {
    background-color: white;
}
.order_name {
    flex-grow: 1;
    align-self: center;
}
.order_value {
    flex-grow: 1;
    align-self: center;
}
.order_filter {
    flex-grow: 4;
    text-align: start !important;
    padding-left: 8%;
}
.btn_filter_type{
    font-size: 25px;
    background: black;
    border-radius: 5px;
}
.btn_filter_type:hover{
    background: rgb(26, 25, 25);
}
@keyframes gradient {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
}
input {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
    padding: 0 20px;
}
button {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    background: #017997;
    color: #fff;
    border-radius: 4px;
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
button:hover {
    background: #069ec4;
}
select {
    color: #fff;
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
    padding-left: 20px;
    min-height: 26px;
}
.label-select {
    color: #fff;
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
}
</style>


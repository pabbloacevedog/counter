<template>
    <div class="footer">
        <div class="label_total">
            <h2 class="name">Total de todos los contadores</h2>
        </div>
        <div class="value_total">
            <input id="total" type="text" v-model="total" readonly />
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            items: [],
        };
    },
    computed: {
        list() {
            return this.$store.state.counter.list;
        },
        total() {
            return this.$store.state.counter.total;
        },
    },
    methods: {

    },
    created() {
    },
    watch: {
        "$store.state.counter.total": function () {
            // this.total = this.$store.state.counter.total;
        },
    },
};
</script>
<style>
.footer {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #45289f;
}
.total_area {
    flex-grow: 12;
    text-align: start !important;
    padding-left: 8%;
    display: flex;
}
.label_total {
    flex-grow: 11;
    align-self: center;
    text-align: right;
}
.value_total {
    flex-grow: 1;
    align-self: center;
    text-align: right;
    padding-right: 8%;
}
.total {
    color: #fff;
}
#total {
    color: rgb(34 34 34);
    border-radius: 6px;
    width: 50px;
    text-align: center;
    font-size: 20px;
}
</style>
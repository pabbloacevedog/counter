

<template>
    <div class="card_content">
        <div class="card_title">
            <h2 class="name">{{ item.name }}</h2>
        </div>
        <div class="card_count">
            <div class="remove">
                <button
                    class="btn_remove"
                    @click="remove_one"
                    :disabled="remove_disable"
                >
                    <i class="gg-remove"></i>
                </button>
            </div>
            <div class="count">
                <input
                    type="text"
                    class="input_count"
                    readonly
                    v-model="item.value"
                    min="1"
                    max="20"
                />
            </div>
            <div class="add">
                <button
                    class="btn_add"
                    @click="add_one"
                    :disabled="add_disable"
                >
                    <i class="gg-add"></i>
                </button>
            </div>
        </div>
        <div class="card_action">
            <button class="btn_trash" @click="deleteCount">
                <i class="gg-trash"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    props: ["item", "index"],
    data() {
        return {
            count: 15,
            add_disable: false,
            remove_disable: false,
        };
    },
    methods: {
        deleteCount() {
            this.$store
                .dispatch("counter/deleteCount", this.index)
                .then((res) => {})
                .catch((err) => {
                    console.log(err);
                });
        },
        add_one() {
            this.$store
                .dispatch("counter/add_one", this.index)
                .then((res) => {})
                .catch((err) => {
                    console.log(err);
                });
        },
        remove_one() {
            this.$store
                .dispatch("counter/remove_one", this.index)
                .then((res) => {})
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    watch: {
        "item.value": function () {
            if (this.item.value >= 20) {
                this.add_disable = true;
            } else {
                this.add_disable = false;
            }
            if (this.item.value <= 0) {
                this.remove_disable = true;
            } else {
                this.remove_disable = false;
            }
        },
    },
};
</script>
<style>
.card_content {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}
.input_count {
    width: 10px;
    text-align: center;
}
.card_title {
    flex-grow: 10;
    padding-left: 5%;
    max-width: 600px;
}
.name {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
}
.card_count {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.card_action {
    flex-grow: 1;
    align-self: center;
    text-align: center;
}
.remove {
    flex-grow: 1;
    align-self: center;
}
.count {
    flex-grow: 1;
    align-self: center;
}
.add {
    flex-grow: 1;
    align-self: center;
}
.gg-remove {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1.5));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 22px;
}
.gg-remove::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
}
.btn_remove {
    padding: 5px;
    background: #e26d6d;
    color: #ffffff;
    border-radius: 25px;
}
.btn_add {
    padding: 5px;
    background: #3e9b27;
    color: #ffffff;
    border-radius: 25px;
}
.btn_add:hover {
    background: #205c11;
}
.btn_trash {
    padding: 9px 13px;
    background: #000000;
    color: #ffffff;
    border-radius: 25px;
}
.btn_trash:hover {
    background: #ff1313;
}
.btn_remove:hover {
    background: #d44040;
}
.gg-add {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid;
    transform: scale(var(--ggs, 1.5));
    border-radius: 22px;
}
.gg-add::after,
.gg-add::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
}
.gg-add::after {
    width: 2px;
    height: 10px;
    top: 4px;
    left: 8px;
}
.gg-trash {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px;
}
.gg-trash::after,
.gg-trash::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
}
.gg-trash::after {
    background: currentColor;
    border-radius: 3px;
    width: 16px;
    height: 2px;
    top: -4px;
    left: -5px;
}
.gg-trash::before {
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: -7px;
    left: -2px;
}
</style>
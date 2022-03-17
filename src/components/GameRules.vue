<template>
  <div class="rules">
    <div class="rules-wrapper">
        <span class="close-btn" @click="closeModal"></span>
        <h2>Rules</h2>
        <ol>
            <li>Click on Rick's head to mark 1 point</li>
            <li>Avoid clicking on the wrong head </li>
            <li>Every wrongs click make you accumulate errors </li>
            <li>Game over if 3 errors</li>
            <li>Every 10 rounds, the game levels up and speed increases</li>
            <li>There is a maximum of 10 levels</li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.modal = this.$el
        this.modal.addEventListener('click', this.onOutsideClick)
    },
    methods: {
        onOutsideClick(e) {
            const modalInner = this.modal.querySelector('.rules-wrapper')
            if (!e.composedPath().includes(modalInner)) {
                this.closeModal()
            }
        },
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.rules {
    position: absolute;
    height:100vh;
    width:100%;
    background:rgba(black, 0.5);
    display:grid;
    place-content: center;
    z-index:100;

    .rules-wrapper {
        background-color: rgba(17, 70, 6, 1);;
        padding: 3rem;
        border-radius: 10px;
        position: relative;
    }
}

.close-btn {
    width: 20px;
    height: 20px;
    background: rgba(white, .7);
    position: absolute;
    cursor: pointer;
    top: -.75rem;
    right: -.75rem;
    z-index: 2;

    &:after,
    &:before {
        width: 100%;
        height: 2px;
        content: '';
        background: #000;
        z-index: 2;
        position: absolute;
    }

    &:before {
        transform: translate(0, 10px) rotate(-45deg);
    }

    &:after {
        transform: translate(0, 10px) rotate(45deg);
    }
}
</style>
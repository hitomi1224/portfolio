<template>
<div class="main">
    <div class="header">
        <h2 class="title">HITOMI SATO</h2>
        <ul class="nav">
            <li class="nav-item"><NuxtLink to="/" class="nav-item-link">HOME</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/profile" class="nav-item-link">PROFILE</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/works" class="nav-item-link">WORKS</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/contact" class="nav-item-link">CONTACT</NuxtLink></li>
        </ul>
        <ul class="sp-nav" :class="{ toggle: isMenuOpen }">
        <li class="nav-item"><a href="/" class="nav-item-link" @click="closeMenu">HOME</a></li>
        <li class="nav-item"><a href="/profile" class="nav-item-link" @click="closeMenu">PROFILE</a></li>
        <li class="nav-item"><a href="/works" class="nav-item-link" @click="closeMenu">WORKS</a></li>
        <li class="nav-item"><a href="/contact" class="nav-item-link" @click="closeMenu">CONTACT</a></li>
        <li class="close" @click="toggleMenu"><span>閉じる</span></li>
        </ul>
        <div class="menu-sp" @click="toggleMenu">
        <span></span>
        </div>
    </div>

<Nuxt />
</div>
</template>

<!-- スマホナビの表示・非表示 -->
<script>
export default {
    data() {
    return {
        isMenuOpen: false
    };
    },
    methods: {
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        },
    closeMenu() {
    this.isMenuOpen = false;
    }
    }
};
</script>
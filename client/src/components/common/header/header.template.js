export default /*html*/`

<div class="col-sm-auto bg-light sticky-top">
    <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
        <a @click="goTo('Home')" class="d-block p-3 link-dark text-decoration-none" title="Home" data-bs-toggle="tooltip"
            data-bs-placement="bottom" data-bs-original-title="Icon-only">
            <i class="fs-1" :class="route.name=='Home'?'bi-house-fill':'bi-house'"></i>
        </a>
        <ul
            class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">

            <li class="cursor-pointer" @click="goTo('Posts')">
                <a class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="left"
                    data-bs-original-title="Posts">
                    <i class="fs-1" :class="route.name=='Posts'?'bi-tv-fill':'bi-tv'"></i>
                </a>
            </li>
            <li class="cursor-pointer" @click="goTo('People')">
                <a class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
                    data-bs-original-title="People">
                    <i class="fs-1" :class="route.name=='People'?'bi-people-fill':'bi-people'"></i>
                </a>
            </li>
        </ul>
        <div class="dropdown" class="cursor-pointer">
            <a class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="h2" :class="userStore?.isLoggedIn?'bi-person-circle':'bi-person'"></i>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                <li><a class="dropdown-item capitalize">{{userStore?.isLoggedIn?userStore.userName:'Guest'}}</a></li>
                <li v-if="!userStore?.isLoggedIn" @click="toggleSignInModal"><a class="dropdown-item">Sign In</a></li>
                <li v-if="!userStore?.isLoggedIn" @click="toggleSignUpModal"><a class="dropdown-item">Sign Up</a></li>
                <li v-if="userStore?.isLoggedIn" @click="goTo('Sign.Out')"><a class="dropdown-item">Sign Out</a></li>
            </ul>
        </div>
    </div>
</div>


`
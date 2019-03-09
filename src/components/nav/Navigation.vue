<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <b-container>
        <b-row class="usp__bar">
          <b-col>
            <div class="usp">
              <font-awesome-icon icon="check" />
              International hotel award 2019
            </div>
          </b-col>
          <b-col>
             <div class="usp">
              <font-awesome-icon icon="check" />
              Tripple A Rating
            </div>
          </b-col>
          <b-col>
           <div class="usp">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              Five star rating
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss">
  .usp {
    text-align: center;

    &__bar {
      font-size: 14px;
      padding: 0.5rem;
      letter-spacing: 1px;
    }
  }
</style>


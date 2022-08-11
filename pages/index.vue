<template>
  <div class="content">
    <div class="main-img">
      <img src="https://pizza4ps.com/img2017/top/img_main.jpg" alt="" />
      <h2 class="title">Delivering Wow,<br />Sharing Happiness</h2>
    </div>
    <section class="content-wrap">
      <div class="intro">
        <div class="left">
          <span>Welcome to </span>
          <span class="name">MPEC Restaurant</span>
        </div>
        <div class="right">
          <p>
            With our mission of "Delivering Wow, Sharing Happiness," we have
            been striving every day to provide the best dining experience to all
            of our dear guests. A restaurant should not be a place to simply
            have a meal. We truly want every guest to leave happy with our food,
            service, and environment that delivers the "Wow" factor. We continue
            to evolve and improve every day so that we can always fulfill our
            mission of "Delivering Wow, Sharing Happiness" to every guest.
          </p>
          <p class="btn-about">About MPEC Restaurant</p>
        </div>
      </div>
      <div>
        <ul class="list-picture">
          <li class="item">
            <img src="https://pizza4ps.com/img2017/top/img_item2.jpg" alt="" />
            <span>House-made Cheese</span>
          </li>
          <li class="item">
            <img src="https://pizza4ps.com/img2017/top/img_item1.jpg" alt="" />
            <span>Farm to Table</span>
          </li>
          <li class="item">
            <img src="https://pizza4ps.com/img2017/top/img_item3.jpg" alt="" />
            <span>Design</span>
          </li>
          <li class="item">
            <img src="https://pizza4ps.com/img2017/top/img_item4.jpg" alt="" />
            <span>"Omotenashi</span>
          </li>
        </ul>
      </div>
      <div class="intro2">
        <div class="left">
          <span
            ><span class="intro-title title-green">“Magic of Pizza”&nbsp;</span>
            <span class="intro-title"
              >is<br />
              the origin of our restaurant.</span
            ><br /><br
          /></span>
          <span class="description"
            >Back in 2005, the founder of MPEC Restaurant, Masuko, built a
            wood-fired pizza oven with his friends in the backyard of his house.
            He invited his friends and family and hosted pizza parties.<br />
            In 2011, the original members who once made the pizza oven gathered
            again and started the history of MPEC Restaurant. We named our
            restaurant MPEC Restaurant, based on our vision, Make the World
            Smile "For Peace."</span
          >
        </div>
        <div class="right">
          <img src="http://pizza4ps.com/img2017/top/img_top1.jpg" alt="" />
        </div>
      </div>
      <div class="menu">
        <div>
          <div>
            <span>Our Menu</span>
          </div>
          <ul class="menu-list">
            <li class="menu-item">seasonal</li>
            <li class="menu-item">pizza</li>
            <li class="menu-item">food</li>
            <li class="menu-item">dessert</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.content {
  color: #fff;
  background: url('https://pizza4ps.com/common2017/img/other/bg_body.gif')
    repeat 0 0;
}
.main-img {
  position: relative;
  & > img {
    object-fit: cover;
    width: 100%;
  }
  & > .title {
    position: absolute;
    width: 100%;
    top: 50%;
    text-align: center;
    color: #fff;
    font-size: 50px !important;
    line-height: 60px;
    font-family: 'CenturyStd-LightCondensed-VH', l serif !important;
  }
}
.content-wrap {
  background: url('https://pizza4ps.com//img2017/top/img_01.webp') no-repeat
    100px -70px;
  > .intro {
    display: flex;
    padding: 90px 0;
    > .left {
      width: 50%;
      text-align: center;
      font-size: 40px;
      font-family: 'CenturyStd-LightCondensed-VH', l serif;
      line-height: 6;
      & .name {
        color: #9eaf3b;
      }
    }
    > .right {
      width: 50%;
      padding: 0 20px;
      line-height: 2.1;
      font-family: 'Atlas-Grotesk-Regular-VH', sans-serif;
      & .btn-about {
        border: 2px solid #ccc;
        padding: 2px 5px;
        font-size: 24px;
        display: inline-block;
      }
    }
  }
  .list-picture {
    display: block;
    list-style: none;
    > li {
      float: left;
      width: 25%;
      padding: 0 5px;
      position: relative;
      > img {
        width: 100%;
        height: auto;
      }
      > span {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 26px;
        font-family: 'CenturyStd-LightCondensed-VH', l serif;
      }
    }
  }
  .intro2 {
    display: flex;
    padding: 90px;
    line-height: 0.9;
    > .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      padding: auto;
      padding-right: 10px;
      .intro-title {
        font-family: CenturyStd-LightCondensed-VH, serif;
        font-size: 40px;
        &.title-green {
          color: #9eaf3b;
        }
      }
      > .description {
        line-height: 2.1;
        letter-spacing: 1px;
        font-family: 'Atlas-Grotesk-Regular-VH', sans-serif;
      }
    }
    > .right {
      width: 50%;
      padding: 25px;
      > img {
        width: 100%;
        height: auto;
      }
    }
  }
  .menu {
    background: url('https://pizza4ps.com//img2017/top/bg_menu.webp') no-repeat
      0 0;
    background-size: cover;
    padding: 55px 0 45px;
    height: 300px;
    font-family: 'CenturyStd-LightCondensed-VH', l serif;
    > div > div {
      text-align: center;
      font-size: 35px;
    }
    > div > .menu-list {
      display: block;
      list-style: none;
      justify-content: center;
      margin-top: 35px;
      > .menu-item {
        text-transform: uppercase;
        width: 25% !important;
        float: left;
        display: list-item;
        text-align: center;
        height: 100px;
        border-left: 1px solid #ccc;
        line-height: 100px;
        font-size: 25px;
        &:first-child {
          border: none;
        }
      }
    }
  }
}
</style>

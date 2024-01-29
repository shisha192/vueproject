<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import * as Yup from "yup"

const r_fields = ref({
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
})
</script>

<template>
  <div>
    <main>
      <section class="bg-[url(/img/banner.jpg)] bg-[length:100%] bg-no-repeat pb-30">
        <div class="flex h-full flex-col">
          <div class="pt-17% md:pt-20% lg:pt-21% mb-70 md:mb-60">
            <img src="/img/logo.svg" alt="logo" class="mx-auto h-52 w-197 md:h-58 md:w-220" />
          </div>

          <h1 class="h1-sb mx-auto max-w-1248 px-16 text-center">
            <span class="text-gradient bg-gradient">GAME DEVELOPMENT STUDIO</span>
            FOR VIRTUAL REALITY SOLUTIONS
          </h1>
        </div>
      </section>

      <div class="m-container">
        <img src="/img/Line.png" alt="line" class="w-full" />
      </div>

      <section class="py-30">
        <div class="m-container">
          <h2 class="h2-sb mb-40 text-center text-primary-300 md:mb-60">We create</h2>

          <h3 class="st-m text-stroke text-right">Heroes</h3>

          <div class="relative pt-80">
            <div class="w-52% md:48% lg:38% 2xl:28% absolute left-0 top-0 z-10 flex gap-x-8">
              <img src="/img/mini-1.jpg" alt="img" class="w-57% md:w-37%" />

              <p class="b2-r md:b1-m py-12">From sketch</p>
            </div>

            <div class="circle bg-secondary-200"></div>

            <div class="mask pt-61% bg-[url(/img/img-1.jpg)] bg-cover bg-center"></div>
          </div>

          <p class="b2-r md:b1-m lg:b1-r 2xl:b1-m text-right text-secondary-300">to 3D visualization</p>
        </div>
      </section>

      <section class="py-30">
        <div class="m-container">
          <h3 class="st-m text-stroke text-left">Units</h3>

          <div class="relative pt-80">
            <div class="w-52% md:48% lg:38% 2xl:28% absolute right-0 top-0 z-10 flex justify-end gap-x-8">
              <p class="b2-r md:b1-m py-12">From sketch</p>

              <img src="/img/mini-2.jpg" alt="img" class="w-57% md:w-37%" />
            </div>

            <div class="circle bg-primary-300"></div>

            <div class="mask pt-61% bg-[url(/img/img-2.jpg)] bg-cover bg-center"></div>
          </div>

          <p class="b2-r md:b1-m lg:b1-r 2xl:b1-m text-right text-secondary-300">to Media visualization</p>
        </div>
      </section>

      <section class="py-30">
        <div class="m-container">
          <h3 class="st-m text-stroke text-right">Worlds</h3>

          <div class="relative pt-80">
            <div class="w-89% md:w-65% lg:58% xl:58% absolute left-0 top-0 z-10 flex gap-x-8">
              <img src="/img/mini-3.jpg" alt="img" class="w-70% md:w-56% lg:w-62%" />

              <p class="b2-r md:b1-m py-12">From sketch</p>
            </div>

            <div class="circle bg-neutral"></div>

            <div class="mask pt-61% bg-[url(/img/img-3.jpg)] bg-cover bg-center"></div>
          </div>

          <p class="b2-r md:b1-m lg:b1-r 2xl:b1-m text-right text-secondary-300">to Media visualization</p>
        </div>
      </section>

      <div class="m-container">
        <img src="/img/Line.png" alt="line" class="w-full" />
      </div>

      <section class="relative pt-30">
        <div class="mx-auto max-w-1440">
          <h2 class="h2-sb mb-40 text-center uppercase text-secondary-200 md:mb-60 xl:mb-80 2xl:mb-114">
            work exampless
          </h2>

          <div class="w-78% md:w-61% relative mx-auto mb-40">
            <swiper
              :navigation="{ prevEl: '#prevEl', nextEl: '#nextEl', enabled: true }"
              :slides-per-view="1"
              :space-between="10"
              :modules="[Navigation]"
            >
              <swiper-slide
                v-for="(slide, i) in [
                  'bg-[url(/img/slide-1.jpg)]',
                  'bg-[url(/img/slide-2.jpg)]',
                  'bg-[url(/img/slide-3.jpg)]',
                  'bg-[url(/img/slide-4.jpg)]',
                ]"
                class="mask-2 pt-52% bg-cover"
                :class="[slide]"
              ></swiper-slide>
            </swiper>

            <button
              id="prevEl"
              class="top-50% -translate-y-50% absolute -left-24 h-24 w-24 md:-left-72 md:h-48 md:w-48 [&.swiper-button-disabled]:opacity-50"
            >
              <svg class="h-full w-full" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1775 2.5L0.5 12.5L10.1775 22.5L10.5 22.1325L1.17814 12.5L10.5 2.86745L10.1775 2.5Z"
                  fill="#FF00FF"
                />
              </svg>
            </button>

            <button
              id="nextEl"
              class="top-50% -translate-y-50% absolute -right-24 h-24 w-24 md:-right-72 md:h-48 md:w-48 [&.swiper-button-disabled]:opacity-50"
            >
              <svg class="h-full w-full" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8225 2.5L23.5 12.5L13.8225 22.5L13.5 22.1325L22.8219 12.5L13.5 2.86745L13.8225 2.5Z"
                  fill="#FF00FF"
                />
              </svg>
            </button>
          </div>

          <div class="circle bottom-0 top-auto bg-secondary-200 blur-[300px]"></div>

          <img src="/img/line-2.png" alt="line" class="w-full" />
        </div>
      </section>

      <section class="pb-40 pt-30 xl:pb-60 2xl:pb-80">
        <div class="m-container">
          <h2 class="h2-sb mx-auto mb-24 max-w-824 text-center">
            <span class="text-gradient bg-gradient">LET'S TALK</span> ABOUT YOUR PROJECT
          </h2>

          <p class="p1-r mx-auto mb-32 max-w-612 text-center text-neutral-200">
            We are ready to discuss the details of your project and answer any of your questions: just fill out the form
            below.
          </p>

          <BaseForm
            class="space-y-16 md:grid md:grid-cols-2 md:gap-x-24 md:space-y-0"
            v-slot="{
              slotProps: {
                meta: { valid },
              },
            }"
          >
            <div class="flex flex-col gap-y-16 md:gap-y-24">
              <BaseInputM
                name="name"
                v-model="r_fields.name"
                placeholder="Full Name"
                :rules="Yup.string().required()"
              />

              <BaseInputM
                name="company"
                v-model="r_fields.company"
                placeholder="Company"
                :rules="Yup.string().required()"
              />

              <BaseInputM name="phone" v-model="r_fields.phone" placeholder="Phone number(optional)" />

              <BaseInputM
                name="email"
                v-model="r_fields.email"
                placeholder="Email"
                :rules="Yup.string().email().required()"
              />
            </div>

            <div class="flex flex-col gap-y-12">
              <BaseTextarea name="message" v-model="r_fields.message" placeholder="Tell us about your project goals" />

              <p class="b2-r px-16 text-neutral-500">
                By submitting your information, you agree to our
                <span class="text-secondary-800">Privacy policy</span> and
                <span class="text-secondary-800">Terms of Use</span>
              </p>

              <button
                :disabled="!valid"
                class="mt-auto w-full bg-primary-300 px-16 py-22 hover:bg-primary-200 disabled:bg-primary-800 disabled:text-neutral-10/50"
              >
                Send
              </button>
            </div>
          </BaseForm>
        </div>
      </section>

      <div class="mx-auto max-w-1440">
        <div class="pt-67% bg-[url(/img/iStock.jpg)] bg-cover"></div>
      </div>

      <div class="m-container">
        <img src="/img/Line.png" alt="line" class="w-full" />
      </div>
    </main>

    <footer class="pb-60">
      <div class="m-container">
        <img src="/img/logo.svg" alt="logo" class="mx-auto mb-16 h-36 w-136" />
        <div class="p1-r text-center opacity-80">
          <div>Ipoon LTD</div>
          <div>HE455335</div>
          <div>Cyprus , Kouklia, 8509</div>
          <div>Apollonos 36</div>
          <br />
          <div>+35794008583</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.mask {
  mask-image: url("/img/mask/maska-1.png");
  mask-repeat: no-repeat;
  mask-size: contain;
}
.mask-2 {
  mask-image: url("/img/mask/maska-2.png");
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>

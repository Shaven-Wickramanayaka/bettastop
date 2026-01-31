<script></script>
<template>
  <div class="w-screen justify-self-start mt-30">
    <button
      command="show-modal"
      commandfor="drawer"
      class="rounded-md bg-red-400 p-2 hover:border-2"
    >
      Filters
    </button>
  </div>
  <el-dialog>
    <dialog
      id="drawer"
      aria-labelledby="drawer-title"
      class="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
    >
      <el-dialog-backdrop
        class="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 dark:bg-gray-900/50"
      ></el-dialog-backdrop>

      <div
        tabindex="0"
        class="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
      >
        <el-dialog-panel
          class="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
        >
          <div
            class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4"
          >
            <button
              type="button"
              command="close"
              commandfor="drawer"
              class="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:text-gray-400 dark:hover:text-white dark:focus-visible:outline-red-500"
            >
              <span class="absolute -inset-2.5"></span>
              <span class="sr-only">Close panel</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                class="size-6"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            class="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl dark:bg-red-800 dark:after:absolute dark:after:inset-y-0 dark:after:left-0 dark:after:w-px dark:after:bg-white/10"
          >
            <div class="px-4 sm:px-6">
              <h2
                id="drawer-title"
                class="text-base font-semibold text-gray-900 dark:text-white"
              >
                Filters
              </h2>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <div>
                <div>
                  <form>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">Fish</label><br />

                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                      checked
                    />
                    <label for="vehicle2">Shrimp</label><br />

                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                    <label for="vehicle3">Equipment</label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="50"
                      class="slider"
                      id="myRange"
                    />
                    <label for="vehicle3">Price</label>
                  </form>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</template>

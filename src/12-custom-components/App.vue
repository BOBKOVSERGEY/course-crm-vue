<template>
  <div class="app__wrapper app__wrapper_page-type_inner">
    <LeftBar />
    <div class="app__main">
      <div class="main-content">
        <div class="main-content__head">
          <div class="main-content__head-row">
            <div class="main-content__title">Мой профиль
              Some
            </div>
          </div>
        </div>
        <div class="main-content__body">
          <div class="tabs">
            <div class="tabs__head">
              <div class="tabs__tab tabs__tab_active">Мои клиенты
              </div>
              <div class="tabs__tab">Мои сделки
              </div>
            </div>
            <div class="tabs__body">
              <div class="tabs__content tabs__content_active">
                <div class="table-view">
                  <table class="table">
                    <thead class="table__head">
                    <tr class="table__head-row">
                      <th class="table__head-cell">Контрагент
                      </th>
                      <th class="table__head-cell">E-mail
                      </th>
                      <th class="table__head-cell">Должность
                      </th>
                      <th class="table__head-cell">Тип контрагента
                      </th>
                      <th class="table__head-cell table__head-cell_actions">
                        <Button />
                        <Button />
                        <a class="button button_no-text button_size_xs button_transparent" href="#">
                          <svg class="icon icon_type_filter">
                            <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
                          </svg>
                        </a>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="table__body">
                      <tr is="vue:TableRow"></tr>
                      <TableRow />
                      <TableRow />
                      <TableRow />
                    </tbody>
                  </table>
                  <div class="pagination">
                    <div class="pagination__column">
                      <div class="pagination__text pagination__text_range">0 — 10
                      </div>
                      <div class="pagination__text">из 1200 записей
                      </div>
                    </div>
                    <div class="pagination__column">
                      <div class="pagination__text">страница
                      </div>
                      <div class="pagination__controls"><a class="button button_size_xs button_no-text" href="#">
                        <svg class="icon icon_type_chevron-left">
                          <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
                        </svg></a>
                        <div class="textbox textbox_size_s textbox_text-center">
                          <label class="textbox__wrapper">
                            <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="1">
                          </label>
                        </div><a class="button button_size_xs button_no-text" href="#">
                          <svg class="icon icon_type_chevron-right">
                            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                          </svg></a>
                      </div>
                      <div class="pagination__text">из 120
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabs__content">
                <p>Вкладка со сделками</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightBar />
    </div>
  </div>
  <Footer />
</template>
<script setup>



import TableRow from "@/12-custom-components/components/TableRow.vue";
</script>


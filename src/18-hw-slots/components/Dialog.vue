<template>
  <div class="utility-container__body">
    <div class="dialog-choose">
      <div class="dialog-choose__close">
        <svg class="icon_size_l icon icon_type_x">
          <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
        </svg>
      </div>
      <div class="dialog-choose__head">
        <HeadingDialog>
          Подрядчики
        </HeadingDialog>
        <DescriptionDialog>
          <template #default>
            Выберите подрядчика из списка. Чтобы добавить нового подрядчика, воспользуйтесь интерфейсом
          </template>
          <template #link>
            <a href="#">Подрядчики</a>
          </template>
        </DescriptionDialog>
      <TextBox
          label="Название контрагента"
          v-model="searchQuery"
          placeholder="Введите название компании, Инн, КПП"
          @update:modelValue="search"
      />
      </div>
      <DialogChooseBody :contractors="contractors" />
      <div class="dialog-choose__footer">
        <a
            @click="addContractor"
            class="button button_size_s button_no-text button_rounded" href="#">
          <svg class="icon icon_type_plus-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
          </svg>
        </a>
        <DialogChooseFooterText>
            подрядчика
        </DialogChooseFooterText>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextBox from "@/17-hw-operations-lists/components/TextBox.vue";
import { ref } from "vue";
import { faker} from "@faker-js/faker";
import DialogChooseBody from "@/17-hw-operations-lists/components/DialogChooseBody.vue";
import HeadingDialog from "@/18-hw-slots/components/HeadingDialog.vue";
import DescriptionDialog from "@/18-hw-slots/components/DescriptionDialog.vue";
import DialogChooseFooterText from "@/18-hw-slots/components/DialogChooseFooterText.vue";
const searchQuery = ref('');
const originalContractors = [
  {
    id: 1,
    name: 'ООО "Газпром Нефть"',
    inn: '8715473312',
    kpp: '971501003',
  },
  {
    id: 2,
    name: 'ООО "ЭСДИ"',
    inn: '7715473311',
    kpp: '771501001',
  },
  {
    id: 3,
    name: 'ООО "Согаз Жизнь"',
    inn: '4715473312',
    kpp: '571501003',
  },
  {
    id: 4,
    name: 'ООО "Норникель"',
    inn: '6715473314',
    kpp: '171501005',
  },
  {
    id: 5,
    name: 'ООО "ТехноНиколь"',
    inn: '4715473319',
    kpp: '271501008',
  },
  {
    id: 6,
    name: 'ООО "РосАтом"',
    inn: '3715473313',
    kpp: '171501001',
  },
  {
    id: 7,
    name: 'ООО "РосНано"',
    inn: '5715473315',
    kpp: '671501003',
  },
  {
    id: 8,
    name: 'ООО "Русал"',
    inn: '1715473319',
    kpp: '971501001',
  }
];
const contractors = ref(JSON.parse(JSON.stringify(originalContractors)));
faker.setLocale('ru');
const addContractor = (index) => {
  searchQuery.value = '';
  const newConstractor =  {
    id: +faker.random.numeric(3),
    name: faker.company.name(),
    inn:faker.random.numeric(10),
    kpp:faker.random.numeric(9)
  }
  contractors.value.splice(index, 0, newConstractor)
  originalContractors.splice(index, 0, newConstractor)
}


const search = () => {
  if(searchQuery.value.trim().length >= 3) {
    contractors.value = originalContractors.filter((company) => {
      return company.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase()) ||
              company.inn.includes(searchQuery.value.trim()) ||
              company.kpp.includes(searchQuery.value.trim())

    })
  }else{
    contractors.value = JSON.parse(JSON.stringify(originalContractors))
  }
}


</script>

<style lang="scss">
.dialog-choose__footer {
  flex-direction: column!important;
}
</style>
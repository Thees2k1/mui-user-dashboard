import { Customer, CustomersTable } from '@/components/dashboard/customer/customers-table';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/system/Stack';
import dayjs from 'dayjs';
import React from 'react';
import CustomersFilters  from '@/components/dashboard/customer/customers-filters';
import { Metadata } from 'next';
import { config } from '@/config';
import CustomerBoard from '@/components/dashboard/customer/customers-board';

//route segment config - metadata
export const metadata ={title:`Customers | Dashboard | ${config.site.name}`} satisfies Metadata;

// mock data
const customers = [
    {
      id: 'USR-010',
      name: 'Alcides Antonio',
      avatar: '/assets/avatar-10.png',
      email: 'alcides.antonio@devias.io',
      phone: '908-691-3242',
      gender: 'male',
      address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-009',
      name: 'Marcus Finn',
      avatar: '/assets/avatar-9.png',
      email: 'marcus.finn@devias.io',
      phone: '415-907-2647',
      gender: 'female',
      address: { city: 'Carson City', country: 'USA', state: 'Nevada', street: '2188 Armbrester Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-008',
      name: 'Jie Yan',
      avatar: '/assets/avatar-8.png',
      email: 'jie.yan.song@devias.io',
      phone: '770-635-2682',
      gender: 'female',
      address: { city: 'North Canton', country: 'USA', state: 'Ohio', street: '4894 Lakeland Park Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-007',
      name: 'Nasimiyu Danai',
      avatar: '/assets/avatar-7.png',
      email: 'nasimiyu.danai@devias.io',
      phone: '801-301-7894',
      gender: 'male',
      address: { city: 'Salt Lake City', country: 'USA', state: 'Utah', street: '368 Lamberts Branch Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-006',
      name: 'Iulia Albu',
      avatar: '/assets/avatar-6.png',
      email: 'iulia.albu@devias.io',
      phone: '313-812-8947',
      gender: 'male',
      address: { city: 'Murray', country: 'USA', state: 'Utah', street: '3934 Wildrose Lane' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-005',
      name: 'Fran Perez',
      avatar: '/assets/avatar-5.png',
      email: 'fran.perez@devias.io',
      phone: '712-351-5711',
      gender: 'female',
      address: { city: 'Atlanta', country: 'USA', state: 'Georgia', street: '1865 Pleasant Hill Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
  
    {
      id: 'USR-004',
      name: 'Penjani Inyene',
      avatar: '/assets/avatar-4.png',
      email: 'penjani.inyene@devias.io',
      phone: '858-602-3409',
      gender: 'male',
      address: { city: 'Berkeley', country: 'USA', state: 'California', street: '317 Angus Road' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-003',
      name: 'Carson Darrin',
      avatar: '/assets/avatar-3.png',
      email: 'carson.darrin@devias.io',
      phone: '304-428-3097',
      gender: 'unknown',
      address: { city: 'Cleveland', country: 'USA', state: 'Ohio', street: '2849 Fulton Street' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-002',
      name: 'Siegbert Gottfried',
      avatar: '/assets/avatar-2.png',
      email: 'siegbert.gottfried@devias.io',
      phone: '702-661-1654',
      gender: 'male',
      address: { city: 'Los Angeles', country: 'USA', state: 'California', street: '1798 Hickory Ridge Drive' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-001',
      name: 'Miron Vitold',
      avatar: '/assets/avatar-1.png',
      email: 'miron.vitold@devias.io',
      phone: '972-333-4106',
      gender: 'male',
      address: { city: 'San Diego', country: 'USA', state: 'California', street: '75247' },
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
  ] satisfies Customer[];
//satisfy ??
  
// Customers Page
  export default function page(): React.JSX.Element {
    return (
        //container
      <Stack spacing ={3}>
        {/* expanded header */}
        <Stack direction="row" spacing={3}>
            <Stack spacing={1} sx={{flex:'1 1 auto'}}>
                {/* title  */}
                <Typography variant='h4' >Customers</Typography>
                {/* actions - import/export */}
                <Stack direction='row' spacing={1} sx={{alignItems:'center'}}>
                    <Button color='inherit' startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)"/>}>Import</Button>
                    <Button color='inherit' startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)"/>}>Export</Button>
                </Stack>
            </Stack>
            {/* add action container */}
            <div>
                <Button variant="contained" startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)"/>}>
                    Add
                </Button>
            </div>
        </Stack>
        <CustomerBoard customers={customers}/>
      </Stack>
    )
  }

  
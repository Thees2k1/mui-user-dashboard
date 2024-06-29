"use client"

import { InputAdornment, OutlinedInput } from '@mui/material';

// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import Card from '@mui/material/Card';
import { useState } from 'react';


interface SearchInputProps {
    onFilterChange: (newValue: string) => void;
  }


  const SearchInput: React.FC<SearchInputProps> = ( {onFilterChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(event.target.value);
      };
    return(
        <Card sx={{p:2}}>
            <OutlinedInput
                onChange={handleInputChange}
                defaultValue=""
                fullWidth
                placeholder='Search customer'
                startAdornment={
                    <InputAdornment position='start'>
                        <MagnifyingGlassIcon fontSize='var(--icon-fontSize-md)'/>
                    </InputAdornment>
                }
                sx={{maxWidth:'500px'}}
            />
        </Card>
    )
}

export default SearchInput;
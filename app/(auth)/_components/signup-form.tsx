'use client';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { GradientButton } from '@/components/custom-button';
import { countries } from '@/data/countries';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { bdDivisions } from '@/data/divisions';
import { signupFormSchema } from '@/schemas/sign-up-form-schema';

type SignupFormValues = z.infer<typeof signupFormSchema>;

const SignupForm = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [openDivision, setOpenDivision] = useState(false);
  const [openDistrict, setOpenDistrict] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      signupWith: 'phone',
      fullName: '',
      phone: '',
      email: '',
      password: '',
      country: '',
      division: '',
      district: '',
    },
  });

  const signupWith = form.watch('signupWith');
  const country = form.watch('country');
  const division = form.watch('division');

  const selectedDivision = bdDivisions.find((d) => d.id === division);
  const districtOptions = selectedDivision?.districts ?? [];

  const onSubmit = (values: SignupFormValues) => {
    console.log('Form values:', values);
    // call API here
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Sign up with toggle */}
          <FormField
            control={form.control}
            name="signupWith"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className=" text-[#7A3FAE]">Sign up with:</FormLabel>
                <div className="mt-2 inline-flex rounded-full bg-[#F3E9FF] p-1">
                  <button
                    type="button"
                    onClick={() => field.onChange('phone')}
                    className={`px-6 py-2 rounded-full text-sm  transition hover:cursor-pointer
                      ${
                        field.value === 'phone'
                          ? 'bg-gradient-to-r from-[#D5B3FF] to-[#7326B7] text-white shadow-sm'
                          : 'text-[#7A3FAE]'
                      }`}
                  >
                    Phone
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange('email')}
                    className={`px-6 py-2 rounded-full text-sm transition hover:cursor-pointer
                      ${
                        field.value === 'email'
                          ? 'bg-gradient-to-r from-[#D5B3FF] to-[#7326B7] text-white shadow-sm'
                          : 'text-[#7A3FAE]'
                      }`}
                  >
                    Email
                  </button>
                </div>
              </FormItem>
            )}
          />

          {/* Full name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#7A3FAE]">
                  Full Name <span className=" text-rose-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="border border-[#C99DFF] focus-visible:ring-[#C99DFF] "
                    placeholder="Enter your full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone OR Email based on toggle */}
          {signupWith === 'phone' ? (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A3FAE]">
                    Phone <span className="ml-0.5 text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="border border-[#C99DFF] focus-visible:ring-[#C99DFF]"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#7A3FAE]">
                    Email <span className="ml-0.5 text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="border border-[#C99DFF] focus-visible:ring-[#C99DFF]"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className=" text-[#7A3FAE]">
                  Country <span className="ml-0.5 text-rose-500">*</span>
                </FormLabel>

                <Popover open={openCountry} onOpenChange={setOpenCountry}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-full justify-between border border-[#C99DFF]   hover:cursor-pointer',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? (() => {
                              const selected = countries.find(
                                (c) => c.code === field.value
                              );
                              if (!selected) return 'Select country';
                              return (
                                <span className="flex items-center gap-2">
                                  <span className="text-sm">
                                    {selected.flag}
                                  </span>
                                  <span className="font-normal">
                                    {selected.name}
                                  </span>
                                </span>
                              );
                            })()
                          : 'Select country'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border-[#C99DFF]">
                    <Command>
                      <div className="border-b-[#C99DFF] border">
                        <CommandInput placeholder="Search country..." />
                      </div>
                      <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={country.name}
                              onSelect={() => {
                                field.onChange(country.code);
                                // reset BD dependent fields when changing country
                                form.setValue('division', '');
                                form.setValue('district', '');
                                setOpenCountry(false); // CLOSE POPOVER HERE
                              }}
                            >
                              <div className="">
                                <span className="mr-2 text-sm">
                                  {country.flag}
                                </span>
                                <span className="font-normal">
                                  {country.name}
                                </span>
                              </div>

                              <Check
                                className={cn(
                                  'ml-2 h-4 w-4',
                                  field.value === country.code
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Division & District - only when Bangladesh */}
          {country === 'BD' && (
            <>
              {/* Division */}
              <FormField
                control={form.control}
                name="division"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#7A3FAE]">
                      Division <span className="ml-0.5 text-rose-500">*</span>
                    </FormLabel>

                    <Popover open={openDivision} onOpenChange={setOpenDivision}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'w-full justify-between border border-[#C99DFF]  hover:cursor-pointer',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? bdDivisions.find((d) => d.id === field.value)
                                  ?.name
                              : 'Select division'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border-[#C99DFF]">
                        <Command>
                          <div className="border-b-[#C99DFF] border">
                            <CommandInput placeholder="Search division..." />
                          </div>
                          <CommandList>
                            <CommandEmpty>No division found.</CommandEmpty>
                            <CommandGroup>
                              {bdDivisions.map((d) => (
                                <CommandItem
                                  key={d.id}
                                  value={d.name}
                                  onSelect={() => {
                                    field.onChange(d.id);
                                    form.setValue('district', '');
                                    setOpenDivision(false); // CLOSE
                                  }}
                                >
                                  <span className="font-normal">{d.name}</span>
                                  <Check
                                    className={cn(
                                      'ml-2 h-4 w-4',
                                      field.value === d.id
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* District */}
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#7A3FAE]">
                      District <span className="ml-0.5 text-rose-500">*</span>
                    </FormLabel>

                    <Popover open={openDistrict} onOpenChange={setOpenDistrict}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'w-full justify-between border border-[#C99DFF] rounded-[10px] px-6 hover:cursor-pointer',
                              !field.value && 'text-muted-foreground'
                            )}
                            disabled={!division}
                          >
                            {field.value
                              ? field.value
                              : division
                              ? 'Select district'
                              : 'Choose division first'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border-[#C99DFF]">
                        <Command>
                          <div className="border-b-[#C99DFF] border">
                            <CommandInput placeholder="Search district..." />
                          </div>
                          <CommandList>
                            <CommandEmpty>No district found.</CommandEmpty>
                            <CommandGroup>
                              {districtOptions.map((name) => (
                                <CommandItem
                                  key={name}
                                  value={name}
                                  onSelect={() => {
                                    field.onChange(name);
                                    setOpenDistrict(false); // CLOSE
                                  }}
                                >
                                  <span className="font-normal">{name}</span>
                                  <Check
                                    className={cn(
                                      'ml-2 h-4 w-4',
                                      field.value === name
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-[#7A3FAE]">
                  Password <span className="ml-0.5 text-rose-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="border border-[#C99DFF] focus-visible:ring-[#C99DFF] "
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <GradientButton type="submit" className="w-full py-3 rounded-md">
            Sign up
          </GradientButton>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;

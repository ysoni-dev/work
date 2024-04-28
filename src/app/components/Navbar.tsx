'use client'

import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';

import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/HeaderMegaMenu.module.css';
import programdata from '../json/program.json'



export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    console.log('Drawer opened:', drawerOpened);

    const pagedata = programdata.navbar
    return (
        <>
        <Box className={classes.headerContainerTopContent}>
            <header className={classes.headerTopContent}>
            <Group justify="space-between" h="100%">
                <Group justify="space-between" h="100%">
            <Image src={pagedata.topContent.logos} alt={pagedata.topContent.govalt} width="18" height="10"/>
            <Text className={classes.govText} size="sm">{pagedata.topContent.gov}</Text>
            </Group>
            <Group h="100%" gap={0} visibleFrom="sm" color="white">
                        {pagedata.topContent.links.map((data, index) => {
                            return (
                                <>
                                    <a style={{color:'white'}} key={index} href={data.link} className={classes.link}>
                                        {data.data}
                                    </a>
                                </>
                            )
                        })}
                    </Group>
                    
                </Group>
            </header>
        </Box>
        <Box className={classes.headerContainer}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group justify='space-between' h='100%'>
                        {pagedata.logos.map((data, index) => {
                            return (
                                <Image key={index} src={data.img} alt={data.alt} width="140" height="52" />
                            )
                        })}


                    </Group>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        {pagedata.navlinks.map((data, index) => {
                            return (
                                <>
                                    <a key={index} href={data.link} className={classes.link}>
                                        {data.data}
                                    </a>
                                </>
                            )
                        })}
                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="default">Log in</Button>
                        <Button>Register</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>

                    {/* <Collapse in={linksOpened}>{links}</Collapse> */}
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
        </>
    );
}
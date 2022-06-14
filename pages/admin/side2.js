import React from 'react';
import Link from 'next/link';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from 'react-pro-sidebar/dist/css/styles.css';




const side2 = () => {
  return (
    <>
    
    <ProSidebar>
        <Menu iconShape={styles.square}>
        {isAuth() && isAuth().role === 0 && (
            <MenuItem>
                <Link href="/user">
                    Dashboard
                 </Link>
            </MenuItem>
        )}
        {isAuth() && isAuth().role === 0 && (
            <MenuItem>
                <Link href="/admin">
                    Dashboard
                 </Link>
            </MenuItem>
        )}
            {/* posts menu */}
            <SubMenu title="Posts">
                <MenuItem>
                    <Link href="/admin/crud/blog">
                        Add New Post
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/admin/crud/blogs">
                        All Posts
                    </Link>
                </MenuItem>
            </SubMenu>


            {/* pages menu */}
            <SubMenu title="Pages">
                <MenuItem>
                    <Link href="/admin/page/about">
                        About
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/admin/page/advertisement">
                        Advertisement
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/admin/page/editor">
                        Editor
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/admin/page/contact">
                        Contact
                    </Link>
                </MenuItem>
            </SubMenu>

            {/* categories and tags */}
            <MenuItem>
                <Link href="/admin/crud/category-tag">
                   Categories and Pages
                </Link>
            </MenuItem>


            {/* Ads Setting */}
            <MenuItem>
                <Link href="/admin/ads/ads">
                Ads Setting
                </Link>
            </MenuItem>


            {/* Site Setting */}
            <MenuItem>
                <Link href="/admin/ads/logo">
                Site Setting
                </Link>
            </MenuItem>


            {/* Profile Setting */}
            <MenuItem>
                <Link href="/user/update">
                   Profile Setting
                </Link>
            </MenuItem>



            
         



        </Menu>
    </ProSidebar>
    
    </>
  );
};

export default side2
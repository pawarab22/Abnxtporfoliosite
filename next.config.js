// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output:"export",
  distDir:'dist',
  images:{
    unoptimized:true
  }
}

module.exports = nextConfig
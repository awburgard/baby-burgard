import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export const Background: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // @ts-ignore
    const sky: HTMLCanvasElement = document.getElementById('sky')!

    sky.width = document.body.clientWidth
    sky.height = document.body.clientHeight

    if (sky.getContext) {
      const skyContext = sky.getContext('2d')!

      const radius = 2

      for (let star = 0; star < 50; star++) {
        const min = (Math.random() * 30 + 5) / 10
        const max = sky.width - radius

        var centerX = Math.floor(Math.random() * (max - min + 1)) + min
        var centerY = Math.floor(Math.random() * (max - min + 1)) + min

        skyContext.beginPath()
        skyContext.arc(centerX, centerY, min, 0, 2 * Math.PI)

        skyContext.fillStyle = 'rgb(255, 255, 255)'
        skyContext.fill()
      }
    }
  }, [])

  return (
    <div id='main'>
      <div id='children'>{children}</div>
      <section className='stage'>
        <svg height='390' width='550' id='mountains'>
          <polygon points='300,390 190,90 320,130 400,340' fill='#5d2042' />
          <polygon
            points='0,340 108,190 194,100 201,120 301,390'
            fill='#320e40'
          />
          <polygon
            points='14,348 117,174 194,102 172,377'
            fill='#3b1642'
            fillOpacity='0.8'
          />
          <polygon
            points='120,174 194,102 233,206 144,275'
            fill='#3d1744'
            fillOpacity='0.9'
          />

          <polygon points='233,206 288,177 324,214' fill='#421943' />
          <polygon points='233,206 324,214 247,245' fill='#3e1743' />
          <polygon points='247,245 324,214 360,360' fill='#411842' />
          <polygon points='324,214 288,177 350,210' fill='#632242' />
          <polygon points='324,214 350,210 360,360' fill='#652343' />

          <g id='apex'>
            <polygon points='108,190 170,40 194,100' fill='#aeacb9' />
            <polygon
              points='170,40 234,6 260,70 288,178 194,102'
              fill='#ceced8'
            />
            <polygon points='234,6 290,80 320,132 288,178' fill='#ffffed' />
          </g>
        </svg>

        <svg height='347' width='168' id='cloud1'>
          <g>
            <polygon points='0,30 8,19 27,18 22,36 9,37' fill='#d5d6e2' />
            <polygon points='0,30 9,37 3,50' fill='#c7c2d1' />
            <polygon points='3,50 9,37 22,36 33,44 14,55' fill='#a8a9b7' />
            <polygon points='14,55 33,44 36,52 23,58' fill='#7a7789' />
            <polygon points='27,18 22,36 33,44' fill='#acabb9' />

            <polygon
              points='31,11 51,4 66,1 83,13 83,23 78,23'
              fill='#fff6e7'
            />
            <polygon
              points='27,18 31,11 54,6 56,32 33,40 29,36'
              fill='#d0d0dc'
            />
            <polygon points='29,36 58,65 42,67 31,57' fill='#9694a3' />
            <polygon points='33,40 56,32 75,37 58,65' fill='#a2a1b1' />
            <polygon points='58,65 75,37 82,57' fill='#9897a7' />
            <polygon points='56,32 54,6 80,14 82,57 75,37' fill='#d7d6e2' />

            <polygon points='80,15 84,17 88,30 85,50 81,51' fill='#9d9da9' />
            <polygon points='90,16 82,20 81,31 95,35' fill='#cdcdda' />
            <polygon points='81,31 82,47 95,35' fill='#a2a2b0' />
            <polygon points='82,47 95,35 105,45 91,53' fill='#878892' />
            <polygon points='105,45 95,35 106,22' fill='#fbe5d5' />
            <polygon points='106,22 95,35 90,16' fill='#dbd6dd' />
          </g>
        </svg>

        <svg height='347' width='168' id='cloud2'>
          <g transform='scale(0.5)'>
            <polygon points='0,30 8,19 27,18 22,36 9,37' fill='#d5d6e2' />
            <polygon points='0,30 9,37 3,50' fill='#c7c2d1' />
            <polygon points='3,50 9,37 22,36 33,44 14,55' fill='#a8a9b7' />
            <polygon points='14,55 33,44 36,52 23,58' fill='#7a7789' />
            <polygon points='27,18 22,36 33,44' fill='#acabb9' />

            <polygon
              points='31,11 51,4 66,1 83,13 83,23 78,23'
              fill='#fff6e7'
            />
            <polygon
              points='27,18 31,11 54,6 56,32 33,40 29,36'
              fill='#d0d0dc'
            />
            <polygon points='29,36 58,65 42,67 31,57' fill='#9694a3' />
            <polygon points='33,40 56,32 75,37 58,65' fill='#a2a1b1' />
            <polygon points='58,65 75,37 82,57' fill='#9897a7' />
            <polygon points='56,32 54,6 80,14 82,57 75,37' fill='#d7d6e2' />

            <polygon points='80,15 84,17 88,30 85,50 81,51' fill='#9d9da9' />
            <polygon points='90,16 82,20 81,31 95,35' fill='#cdcdda' />
            <polygon points='81,31 82,47 95,35' fill='#a2a2b0' />
            <polygon points='82,47 95,35 105,45 91,53' fill='#878892' />
            <polygon points='105,45 95,35 106,22' fill='#fbe5d5' />
            <polygon points='106,22 95,35 90,16' fill='#dbd6dd' />
          </g>
        </svg>

        <svg id='ground'></svg>

        <svg id='hills' width='700' height='170'>
          <polygon points='480,70 530,100 560,90 516,40' fill='#9b9d57' />
          <polygon points='480,70 530,100 412,84' fill='#7d8f57' />
          <polygon points='530,100 412,84 360,138' fill='#748857' />
          <polygon points='360,138 240,140 320,82' fill='#748857' />

          <polygon points='412,84 360,140 320,82' fill='#88945a' />
          <polygon points='320,82 240,140 210,64' fill='#597252' />
          <polygon points='300,78 100,100 0,104 170,58' fill='#4f654f' />
          <polygon points='172,58 145,40 122,48 66,79 0,104' fill='#536a50' />
        </svg>

        <svg id='trees'>
          <g className='tree' id='tree' transform='translate(400,30)'>
            <polygon
              points='25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75'
              fill='#3f2145'
            />
            <polygon points='29,75 31,46 32,45 32,74' fill='#812743' />

            <polygon
              points='2,21 11,33 20,32 27,29 32,23 24,35 11,34'
              fill='#282246'
            />
            <polygon
              points='27,29 33,13 18,0 29,2 37,13 32,23'
              fill='#6a7749'
            />

            <polygon
              points='33,23 35,32 45,37 55,27 44,35 37,31'
              fill='#210f3f'
            />
            <polygon points='37,31 38,17 46,17 50,31' fill='#354346' />
            <polygon points='37,31 50,31 45,37' fill='#292941' />
            <polygon points='33,23 37,31 38,17' fill='#2b2d42' />
            <polygon points='38,17 46,17 46,11' fill='#495e4b' />
            <polygon points='46,17 46,11 54,18' fill='#5b7049' />
            <polygon points='44,11 54,18 56,26 50,31' fill='#515d49' />

            <polygon points='11,33 20,32 27,29 15,19' fill='#292e42' />
            <polygon points='27,29 33,13 15,19' fill='#424f46' />
            <polygon points='33,13 18,0 15,19' fill='#48604a' />
            <polygon points='18,0 7,5 15,19' fill='#3a5449' />
            <polygon points='7,5 0,18 15,19' fill='#344847' />
            <polygon points='0,18 11,33 15,19' fill='#292c4b' />

            <polygon
              points='175,4 121,10 53,12 12,16 5,20 47,22 122,12 180,4'
              fill='#648155'
              transform='translate(-148,70)'
            />
          </g>

          <use x='-215' y='-23' xlinkHref='#tree' transform='scale(0.8)' />
          <use x='-220' y='-20' xlinkHref='#tree' />
          <use x='540' y='-30' xlinkHref='#tree' />
          <use x='480' y='-20' xlinkHref='#tree' />
          <use x='440' y='-15' xlinkHref='#tree' transform='scale(1.2)' />
        </svg>

        <canvas id='sky'></canvas>
      </section>
    </div>
  )
}

export default Background

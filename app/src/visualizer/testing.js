import {
  AnimationLoop,
  Program,
  VertexArray,
  Buffer,
  setParameters
} from "@luma.gl/core";
import { instrumentGLContext } from "@luma.gl/webgl";
import { Matrix4 } from "math.gl";

export const simpleExample = gl => {
  instrumentGLContext(gl);
  const aspect = 1;
  const VERTEX_SHADER = `\
attribute vec3 positions;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
}
`;

  const FRAGMENT_SHADER = `\
precision highp float;
void main(void) {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

	const TRIANGLE_VERTS = [0, 1, 0, -1, -1, 0, 1, -1, 0]; // eslint-disable-line
	const SQUARE_VERTS = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]; // eslint-disable-line

  const program = new Program(gl, {
    vs: VERTEX_SHADER,
    fs: FRAGMENT_SHADER
  });

  const triangleVertexArray = new VertexArray(gl, {
    program,
    attributes: {
      positions: new Buffer(gl, new Float32Array(TRIANGLE_VERTS))
    }
  });

  const squareVertexArray = new VertexArray(gl, {
    program,
    attributes: {
      positions: new Buffer(gl, new Float32Array(SQUARE_VERTS))
    }
  });

  const view = new Matrix4().translate([-1.5, 0, -7]);
  const projection = new Matrix4().perspective({
    aspect
  });

  setParameters(gl, {
    clearColor: [0, 0, 0, 1],
    clearDepth: [1],
    depthTest: true,
    depthFunc: gl.LEQUAL
  });

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  program
    .setUniforms({
      uMVMatrix: view,
      uPMatrix: projection
    })
    .draw({
      vertexArray: triangleVertexArray,
      drawMode: gl.TRIANGLES,
      vertexCount: 3
    });

  // Draw Square
  view.translate([3, 0, 0]);

  program
    .setUniforms({
      uMVMatrix: view,
      uPMatrix: projection
    })
    .draw({
      vertexArray: squareVertexArray,
      drawMode: gl.TRIANGLE_STRIP,
      vertexCount: 4
    });

  /* global window */
  //   if (typeof window !== "undefined" && !window.website) {
  //     const animationLoop = new AppAnimationLoop();
  //     animationLoop.start();
  //   }
};

import {
    createKontentEnhancer,
    CANVAS_KONTENT_PARAMETER_TYPES,
    KontentClientList,
  } from '@uniformdev/canvas-kontent';
  import { enhance, CanvasClient, EnhancerBuilder } from '@uniformdev/canvas';
  import { DeliveryClient } from '@kentico/kontent-delivery';

  const client = new DeliveryClient({
    // NOTE: for production code ensure you use environment variables to
    // configure Kontent, not hard-coded values.
    projectId: process.env.KONTENT_PROJECT_ID,
    // note: secureApiKey is only necessary if your delivery API is secured
    secureApiKey: process.env.KONTENT_PREVIEW_API,
  });

  export const kontentEnhancer = createKontentEnhancer({ clients: new KontentClientList({ client }) });

  
